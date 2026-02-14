# Plan: Live Demo - Interactive Dashboard with Real-Time Data

## Мета

Додати окрему сторінку `/demo` з живою інтерактивною демкою, яка демонструє рекрутеру реальні навички: робота з WebSocket, складний стейт, візуалізація даних, анімації, адаптивність.

---

## Що будуємо

**Real-Time Crypto Dashboard** - інтерактивний дашборд з:

1. **WebSocket-з'єднання** - live-стрім цін криптовалют (Binance public WS API, без ключів)
2. **Графік у реальному часі** - sparkline/area chart оновлюється щосекунди
3. **Складна форма** - конфігуратор алертів (multi-step, drag-and-drop порядок, валідація)
4. **Анімовані картки** - ціни оновлюються з кольоровим flash-ефектом (зелений/червоний)
5. **Фільтрація та сортування** - пошук, фільтри, сортування таблиці з debounce

---

## Архітектура

```
pages/
  demo.tsx                          # Нова сторінка демки

src/
  components/
    Demo/
      Demo.tsx                      # Головний контейнер демки
      Demo.module.scss              # Стилі
      DemoHeader/
        DemoHeader.tsx              # Заголовок + кнопка "Назад до портфоліо"
        DemoHeader.module.scss
      CryptoTicker/
        CryptoTicker.tsx            # Тікер з live-цінами (анімовані картки)
        CryptoTicker.module.scss
      PriceChart/
        PriceChart.tsx              # SVG sparkline chart (без бібліотек!)
        PriceChart.module.scss
      AlertForm/
        AlertForm.tsx               # Multi-step форма конфігуратора
        AlertForm.module.scss
      DataTable/
        DataTable.tsx               # Сортована/фільтрована таблиця
        DataTable.module.scss

  hooks/
    useWebSocket.ts                 # Кастомний хук для WS з reconnect, heartbeat
    usePriceHistory.ts              # Хук для збереження історії цін (ring buffer)
    useDebounce.ts                  # Debounce хук для пошуку

  interfaces/
    demo.ts                         # TypeScript інтерфейси для демки
```

---

## Крок-по-кроковий план реалізації

### Фаза 1: Інфраструктура

**Крок 1.1** - Створити TypeScript інтерфейси (`src/interfaces/demo.ts`)
- `CryptoPrice` - дані тікера (symbol, price, change24h, volume)
- `PriceHistoryPoint` - точка графіка (timestamp, price)
- `AlertConfig` - конфігурація алерту (symbol, condition, threshold, notification)
- `WebSocketState` - стан з'єднання (connected, reconnecting, error)

**Крок 1.2** - Створити хук `useWebSocket.ts`
- Підключення до Binance WebSocket API (`wss://stream.binance.com:9443/ws`)
- Підписка на кілька тікерів одночасно (BTC, ETH, SOL, BNB, XRP, ADA, DOT, MATIC)
- Auto-reconnect з exponential backoff
- Cleanup при unmount
- Fallback на mock-дані якщо WS недоступний (для демо-режиму)

**Крок 1.3** - Створити хук `usePriceHistory.ts`
- Ring buffer на 60 точок (остання хвилина)
- Зберігання по кожному symbol окремо
- Мемоїзація для уникнення зайвих re-renders

**Крок 1.4** - Створити хук `useDebounce.ts`
- Загальний debounce хук для пошуку

### Фаза 2: UI Компоненти

**Крок 2.1** - Сторінка `pages/demo.tsx`
- Layout з MainLayout
- Meta-теги
- Лінк на повернення до портфоліо

**Крок 2.2** - `DemoHeader`
- Заголовок "Live Demo: Real-Time Dashboard"
- Індикатор WebSocket з'єднання (зелена/червона крапка з пульсацією)
- Кнопка "Back to Portfolio"
- Підтримка i18n

**Крок 2.3** - `CryptoTicker` (головний wow-ефект)
- Горизонтальний рядок карток з live-цінами
- Кожна картка: іконка монети, ціна, % зміни за 24г
- Flash-ефект при оновленні ціни (зелений якщо ціна зросла, червоний - впала)
- CSS transition для плавності
- Респонсивна горизонтальна прокрутка на мобільних

**Крок 2.4** - `PriceChart` (SVG без бібліотек - демонструє знання SVG/canvas)
- Чистий SVG area chart (без Chart.js чи D3 - щоб показати що вмієш)
- Оновлюється в реальному часі при кожному WS-повідомленні
- Градієнтна заливка під лінією
- Вісь X: час (останні 60 секунд)
- Вісь Y: ціна (автомасштаб)
- Hover tooltip з ціною
- Dropdown для вибору монети
- Анімація малювання лінії (SVG stroke-dashoffset)

**Крок 2.5** - `AlertForm` (складна форма)
- **Step 1**: Вибір монети (radio group з іконками)
- **Step 2**: Умова (price above / price below / % change) + input для порогу
- **Step 3**: Спосіб нотифікації (чекбокси: browser push, email, звук) + тест алерту
- Progress bar між кроками
- Валідація на кожному кроці (reuse існуючого useTextInput)
- Анімація переходу між кроками (slide)
- Збереження стану при переходах між кроками
- Кнопки "Next / Previous / Submit"
- При submit: toast-повідомлення "Alert created!" (UI-only, без бекенду)

**Крок 2.6** - `DataTable` (сортування + фільтрація)
- Таблиця всіх монет з колонками: Symbol, Price, 24h Change, Volume, Market Cap
- Сортування по кожній колонці (asc/desc)
- Пошук по назві з debounce (300ms)
- Фільтр: "Gainers only" / "Losers only" / "All"
- Підсвітка рядків при оновленні ціни
- Респонсив: на мобільних - горизонтальний скрол або card layout

### Фаза 3: Стилізація

**Крок 3.1** - Створити SCSS стилі для всіх компонентів
- Використати існуючі CSS-змінні (primary, secondary, bg, text)
- Dark mode підтримка через `[data-theme="dark"]`
- Респонсивний дизайн (mobile-first)
- CSS анімації:
  - Пульсація зеленої/червоної крапки WS-статусу
  - Flash-ефект оновлення ціни
  - Плавне малювання SVG графіка
  - Slide-in переходи між кроками форми
  - Highlight рядків таблиці

### Фаза 4: Навігація та інтеграція

**Крок 4.1** - Додати лінк на демку в Navbar
- Новий пункт меню "Live Demo" зі спеціальною іконкою/badge
- Підтримка i18n для нового пункту меню

**Крок 4.2** - Додати CTA-кнопку в секцію Projects
- Виділена кнопка/банер "Try Live Demo" поруч з проєктами
- Анімація привертання уваги

**Крок 4.3** - Додати переклади
- Усі тексти демки в `translations.ts` для 6 мов

### Фаза 5: Полірування

**Крок 5.1** - Fallback / Error states
- Skeleton loader поки WS підключається
- Повідомлення "Reconnecting..." при втраті з'єднання
- Mock-дані для превью якщо WS заблокований (corporate firewall)

**Крок 5.2** - Accessibility
- ARIA-labels для графіка
- Keyboard navigation для форми та таблиці
- Screen reader friendly status updates

**Крок 5.3** - Перформанс
- React.memo для карток що не оновились
- useMemo/useCallback для обробників
- Throttle WS оновлень (не частіше 1 раз на 500мс per symbol)
- Lazy import сторінки demo (next/dynamic)

---

## Технічні деталі

### WebSocket API (Binance - безкоштовний, без ключів)

```
wss://stream.binance.com:9443/ws/btcusdt@ticker/ethusdt@ticker/solusdt@ticker
```

Повертає:
```json
{
  "s": "BTCUSDT",     // symbol
  "c": "43250.00",    // current price
  "P": "2.35",        // 24h change %
  "v": "15234.567",   // volume
  "q": "658432100"    // quote volume (≈ market cap proxy)
}
```

### Fallback Mock Data

Якщо WS недоступний - генеруємо реалістичні дані через `setInterval`:
- Базові ціни + random walk
- Оновлення кожну секунду
- Рекрутер бачить працюючий дашборд навіть без інтернету

---

## Що це демонструє рекрутеру

| Навичка | Де видно |
|---------|----------|
| WebSocket / real-time | useWebSocket хук, live-тікер |
| Кастомні хуки | useWebSocket, usePriceHistory, useDebounce |
| SVG / Canvas | PriceChart без бібліотек |
| Складний стейт | Мультикроковий form, таблиця з фільтрами |
| TypeScript | Інтерфейси, generics в хуках |
| CSS анімації | Flash-ефекти, transitions, pulse |
| Респонсивний дизайн | Mobile-first, адаптивні компоненти |
| Error handling | Reconnect, fallback, error states |
| Performance | Memo, throttle, ring buffer |
| A11y | ARIA, keyboard nav |
| Архітектура | Чіткий поділ на компоненти, хуки, інтерфейси |

---

## Залежності

**Нові npm пакети: ЖОДНИХ**

Весь функціонал реалізуємо на чистому React + TypeScript:
- WebSocket: нативний `WebSocket` API
- Графік: чистий SVG
- Анімації: CSS transitions + keyframes
- Стейт: React hooks (useState, useReducer, useRef, useEffect)

Це додатково демонструє, що розробник не тягне бібліотеку на кожен чих.

---

## Порядок виконання

```
1. interfaces/demo.ts           (~15 хв)
2. hooks/useWebSocket.ts        (~30 хв)
3. hooks/usePriceHistory.ts     (~15 хв)
4. hooks/useDebounce.ts         (~10 хв)
5. pages/demo.tsx               (~10 хв)
6. DemoHeader компонент         (~20 хв)
7. CryptoTicker компонент       (~40 хв)
8. PriceChart компонент         (~60 хв)  <-- найскладніший
9. AlertForm компонент          (~45 хв)
10. DataTable компонент         (~35 хв)
11. Стилі (SCSS)                (~40 хв)
12. Навігація + інтеграція      (~20 хв)
13. Переклади i18n              (~20 хв)
14. Fallback + polish           (~30 хв)
```

---

## Відкриті питання

1. **Чи потрібна окрема сторінка `/demo` чи секція на головній?** - Рекомендую окрему сторінку, щоб не обтяжувати основний лендінг.
2. **Яку крипто-пару показувати за замовчуванням?** - BTC/USDT як найпопулярнішу.
3. **Чи додавати кнопку "View Source" з лінком на GitHub файли?** - Рекомендую так, щоб рекрутер міг одразу подивитись код.
