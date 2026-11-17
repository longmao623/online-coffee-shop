import type { Product } from "@/types"

export const products: Product[] = [
  {
    id: "ethiopia-yirgacheffe",
    name: "埃塞俄比亚 · 耶加雪菲",
    enName: "Ethiopia Yirgacheffe",
    description: "花香与柑橘调性，水洗处理，口感干净明亮。",
    price: 42,
    category: "coffee",
    tags: ["单品", "浅烘", "花香"],
  },
  {
    id: "colombia-huila",
    name: "哥伦比亚 · 慧兰",
    enName: "Colombia Huila",
    description: "焦糖与坚果风味，酸度柔和，适合日常饮用。",
    price: 38,
    category: "coffee",
    tags: ["单品", "中烘", "坚果"],
  },
  {
    id: "latte",
    name: "燕麦拿铁",
    enName: "Oat Latte",
    description: "浓缩咖啡融合燕麦奶，丝滑绵密，乳糖不耐友好。",
    price: 36,
    category: "coffee",
    tags: ["意式", "燕麦奶", "热门"],
  },
  {
    id: "americano",
    name: "冰美式",
    enName: "Iced Americano",
    description: "双份浓缩加水，清爽提神，夏日首选。",
    price: 28,
    category: "coffee",
    tags: ["意式", "清爽", "低卡"],
  },
  {
    id: "tiramisu",
    name: "经典提拉米苏",
    enName: "Classic Tiramisu",
    description: "马斯卡彭芝士与手指饼干，咖啡酒浸润，微醺甜蜜。",
    price: 48,
    category: "dessert",
    tags: ["甜点", "招牌"],
  },
  {
    id: "croissant",
    name: "黄油可颂",
    enName: "Butter Croissant",
    description: "法国 AOP 黄油，层层酥脆，外酥内软。",
    price: 22,
    category: "dessert",
    tags: ["烘焙", "早餐"],
  },
  {
    id: "beans-house",
    name: "慢速拼配豆",
    enName: "Slow Brew House Blend",
    description: "店内招牌拼配，巧克力与焦糖尾韵，适合手冲与意式。",
    price: 88,
    category: "beans",
    tags: ["咖啡豆", "250g", "招牌"],
  },
  {
    id: "beans-decaf",
    name: "瑞士水处理低因豆",
    enName: "Swiss Water Decaf",
    description: "低咖啡因处理，保留产地风味，晚间也能安心享用。",
    price: 98,
    category: "beans",
    tags: ["咖啡豆", "200g", "低因"],
  },
]

export const categoryLabels: Record<string, string> = {
  all: "全部",
  coffee: "咖啡",
  dessert: "甜点",
  beans: "咖啡豆",
}

export const featuredIds = [
  "ethiopia-yirgacheffe",
  "latte",
  "tiramisu",
  "beans-house",
]
