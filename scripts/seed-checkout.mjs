import { chromium } from 'playwright-core'

const browser = await chromium.launch()
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } })
const page = await context.newPage()

const cart = [
  { id: 'ethiopia-yirgacheffe', name: '埃塞俄比亚 · 耶加雪菲', enName: 'Ethiopia Yirgacheffe', description: '花香与柑橘调性，水洗处理，口感干净明亮。', price: 42, category: 'coffee', tags: ['单品', '浅烘', '花香'], quantity: 2 },
  { id: 'tiramisu', name: '经典提拉米苏', enName: 'Classic Tiramisu', description: '马斯卡彭芝士与手指饼干，咖啡酒浸润，微醺甜蜜。', price: 48, category: 'dessert', tags: ['甜点', '招牌'], quantity: 1 },
]

await page.goto('http://localhost:3460/checkout')
await page.evaluate((data) => {
  localStorage.setItem('slow-brew-cart', JSON.stringify(data))
}, cart)
await page.reload()
await page.waitForTimeout(1500)
await page.screenshot({ path: 'screenshot-checkout-filled.png' })

// fill form and submit
await page.fill('input[type="text"]', '龙猫先生')
await page.fill('input[type="tel"]', '13800138000')
await page.fill('textarea', '上海市静安区慢速咖啡 1 号')
await page.click('button[type="submit"]')
await page.waitForTimeout(1800)
await page.screenshot({ path: 'screenshot-order-success.png' })

await browser.close()
console.log('done')
