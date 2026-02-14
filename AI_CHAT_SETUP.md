# AI Chat Setup Guide

The AI chat feature has been successfully integrated into your portfolio website with support for multiple AI models from OpenAI and Anthropic. Follow these steps to configure and use it.

## 📦 Installed Packages

The following packages have been installed:
- `ai@^3.4.33` - Vercel AI SDK core
- `@ai-sdk/openai@^0.0.24` - OpenAI provider
- `@ai-sdk/anthropic@^0.0.15` - Anthropic provider

## 🚀 Quick Start

### 1. Set Up API Keys

Create a `.env.local` file in the project root:

```bash
cp .env.local.example .env.local
```

### 2. Add Your API Keys

Edit `.env.local` and add your API keys:

```env
# OpenAI API Key (for GPT models)
OPENAI_API_KEY=sk-...

# Anthropic API Key (for Claude models)
ANTHROPIC_API_KEY=sk-ant-...
```

**Where to get API keys:**
- OpenAI: https://platform.openai.com/api-keys
- Anthropic: https://console.anthropic.com/settings/keys

> **Note:** You need at least one API key. You can use only OpenAI, only Anthropic, or both.

### 3. Restart Development Server

```bash
pnpm dev
```

## 🤖 Available Models

### OpenAI Models
- **GPT-3.5 Turbo** - Fast and cost-effective (requires `OPENAI_API_KEY`)
- **GPT-4** - More capable, slower (requires `OPENAI_API_KEY`)
- **GPT-4 Turbo** - Latest GPT-4 with improved performance (requires `OPENAI_API_KEY`)

### Anthropic Models
- **Claude 3.5 Sonnet** - Best balance of speed and capability (requires `ANTHROPIC_API_KEY`)
- **Claude 3 Opus** - Most capable Claude model (requires `ANTHROPIC_API_KEY`)
- **Claude 3 Haiku** - Fastest Claude model (requires `ANTHROPIC_API_KEY`)

## 🎨 Features

✅ **Floating Chat Button** - Always accessible in the bottom-right corner
✅ **Model Selector** - Switch between different AI models on the fly
✅ **Streaming Responses** - Real-time message streaming
✅ **Conversation History** - Maintains context throughout the chat
✅ **Dark Mode Support** - Adapts to your portfolio's theme
✅ **Mobile Responsive** - Works seamlessly on all devices
✅ **Portfolio Context** - AI assistant knows about your skills, projects, and experience

## 📝 System Prompt

The AI assistant is configured with this system prompt:

> You are a helpful AI assistant on Volodymyr Pestov's portfolio website.
> You can help visitors learn about Volodymyr's skills, experience, and projects.
> Be professional, concise, and friendly.

## 🔧 Customization

### Change the System Prompt

Edit `/pages/api/chat.ts` and modify the `system` parameter:

```typescript
const result = streamText({
  model: selectedModel,
  messages,
  system: `Your custom system prompt here...`,
});
```

### Modify Available Models

Edit `/src/components/Chat/Chat.tsx` to add/remove models:

```typescript
const availableModels = [
  { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', provider: 'OpenAI' },
  // Add or remove models here
];
```

### Style Customization

Modify these files to customize the appearance:
- `/src/components/Chat/Chat.module.scss` - Chat modal styles
- `/src/components/Chat/ChatButton.module.scss` - Floating button styles

## 🛡️ Security

- API keys are stored in `.env.local` which is gitignored
- Never commit your `.env.local` file
- The API route uses Edge Runtime for better performance and security
- All API requests are proxied through your Next.js backend

## 💰 Cost Considerations

API calls cost money. Approximate pricing:
- **GPT-3.5 Turbo**: ~$0.002 per 1K tokens
- **GPT-4**: ~$0.03 per 1K tokens
- **Claude 3.5 Sonnet**: ~$0.003 per 1K tokens

Set usage limits in your provider dashboards to avoid unexpected costs.

## 🐛 Troubleshooting

### Chat button doesn't appear
- Make sure you've restarted the dev server after adding API keys
- Check browser console for errors

### "Internal server error" when sending messages
- Verify your API keys are correct in `.env.local`
- Check that at least one API key is configured
- Look at the terminal console for detailed error messages

### Models not working
- OpenAI models require `OPENAI_API_KEY`
- Claude models require `ANTHROPIC_API_KEY`
- If a model isn't working, verify you have the corresponding API key

## 📚 Documentation

- [Vercel AI SDK](https://sdk.vercel.ai/docs)
- [OpenAI API](https://platform.openai.com/docs)
- [Anthropic API](https://docs.anthropic.com)
