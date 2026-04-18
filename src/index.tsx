import { Hono } from 'hono'

const app = new Hono()

// الصفحة الرئيسية: تقدم تطبيق "المحاسب البسيط" كاملاً (Single Page App)
// نقوم بتمرير محتوى ملف HTML الستاتيك مباشرة بدون redirect لتجربة أنظف
app.get('/', async (c) => {
  return c.redirect('/static/app', 302)
})

// نقطة فحص بسيطة
app.get('/api/health', (c) => {
  return c.json({ ok: true, app: 'المحاسب البسيط', ts: new Date().toISOString() })
})

export default app
