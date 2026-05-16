const foods = {
  rice: [
    { name: "番茄牛腩盖饭", cook: "either", min: 35, price: "35-58 元", time: "25-40 分钟", icon: "🍅", reason: "酸甜番茄很开胃，牛腩和米饭也够顶饱，适合想认真吃一顿的时候。" },
    { name: "照烧鸡腿饭", cook: "either", min: 22, price: "22-38 元", time: "18-30 分钟", icon: "🍗", reason: "甜咸口稳定不踩雷，鸡腿肉有满足感，外卖和自己煎都很方便。" },
    { name: "咖喱猪排饭", cook: "no", min: 28, price: "28-48 元", time: "20-35 分钟", icon: "🍛", reason: "咖喱香味浓，猪排酥脆，特别适合不知道吃什么但想吃重口一点的时候。" },
    { name: "腊味煲仔饭", cook: "no", min: 30, price: "30-55 元", time: "25-45 分钟", icon: "🍚", reason: "米饭带锅巴香，腊味咸香下饭，是很有仪式感的一人食选择。" },
    { name: "鸡蛋午餐肉炒饭", cook: "yes", min: 18, price: "18-28 元", time: "15-20 分钟", icon: "🥚", reason: "用家里常见食材就能做，香气足、速度快，预算友好。" }
  ],
  noodles: [
    { name: "重庆小面", cook: "no", min: 16, price: "16-28 元", time: "10-20 分钟", icon: "🌶️", reason: "麻辣鲜香，分量轻巧但味道很醒神，适合想快速解决一餐。" },
    { name: "葱油拌面", cook: "yes", min: 12, price: "12-22 元", time: "12-18 分钟", icon: "🧅", reason: "做法简单，葱香和酱油香很直接，花小钱也能吃得舒服。" },
    { name: "牛肉拉面", cook: "no", min: 22, price: "22-36 元", time: "15-25 分钟", icon: "🍜", reason: "汤热、肉香、面条筋道，适合想吃点踏实暖胃的。" },
    { name: "番茄鸡蛋面", cook: "yes", min: 15, price: "15-25 元", time: "15-22 分钟", icon: "🍅", reason: "酸甜清爽不腻，自己做很快，晚上吃也没有负担。" },
    { name: "炸酱面", cook: "either", min: 20, price: "20-34 元", time: "18-30 分钟", icon: "🥢", reason: "酱香浓，配黄瓜丝很解腻，属于越拌越香的选择。" }
  ],
  hotpot: [
    { name: "一人小火锅", cook: "no", min: 45, price: "45-75 元", time: "35-60 分钟", icon: "🍲", reason: "想吃很多种菜但不想组局时很合适，热热闹闹又不麻烦。" },
    { name: "番茄肥牛锅", cook: "yes", min: 38, price: "38-65 元", time: "25-35 分钟", icon: "🥩", reason: "汤底酸甜，肥牛熟得快，自己在家煮也能很有满足感。" },
    { name: "麻辣烫自选", cook: "no", min: 25, price: "25-45 元", time: "15-30 分钟", icon: "🥬", reason: "想吃什么夹什么，蔬菜、丸子、主食都能兼顾，选择自由度高。" },
    { name: "菌菇鸡汤锅", cook: "either", min: 42, price: "42-70 元", time: "30-50 分钟", icon: "🍄", reason: "味道鲜但不刺激，适合想吃火锅又想清爽一点的时候。" },
    { name: "冒菜套餐", cook: "no", min: 30, price: "30-52 元", time: "20-35 分钟", icon: "🔥", reason: "有火锅的香味，也有盖饭的方便，适合工作日犒劳自己。" }
  ],
  stirfry: [
    { name: "青椒肉丝配米饭", cook: "either", min: 22, price: "22-38 元", time: "15-30 分钟", icon: "🫑", reason: "家常、下饭、出餐快，想吃小炒时它几乎不会出错。" },
    { name: "鱼香茄子饭", cook: "no", min: 24, price: "24-40 元", time: "18-30 分钟", icon: "🍆", reason: "酸甜微辣，茄子吸满酱汁，拌饭很香。" },
    { name: "虾仁滑蛋", cook: "yes", min: 32, price: "32-55 元", time: "15-22 分钟", icon: "🍤", reason: "口感软嫩，蛋香很足，比普通家常菜多一点精致感。" },
    { name: "回锅肉套餐", cook: "no", min: 26, price: "26-45 元", time: "18-30 分钟", icon: "🥓", reason: "咸香带辣，非常下饭，适合胃口打开的一餐。" },
    { name: "西兰花牛肉", cook: "either", min: 35, price: "35-58 元", time: "20-32 分钟", icon: "🥦", reason: "肉和蔬菜平衡，吃完不容易有负担，预算高一点时很合适。" }
  ],
  late: [
    { name: "烤冷面加肠", cook: "no", min: 12, price: "12-22 元", time: "8-15 分钟", icon: "🌯", reason: "酸甜咸香一口到位，夜里想吃点小快乐时特别合适。" },
    { name: "鸡蛋火腿三明治", cook: "yes", min: 15, price: "15-28 元", time: "10-15 分钟", icon: "🥪", reason: "快手、干净、不会太撑，适合轻量夜宵。" },
    { name: "炸鸡拼薯条", cook: "no", min: 32, price: "32-58 元", time: "20-35 分钟", icon: "🍟", reason: "酥脆热乎，适合今天就想放松一下的心情。" },
    { name: "小馄饨", cook: "either", min: 18, price: "18-30 元", time: "10-20 分钟", icon: "🥣", reason: "汤汤水水很舒服，分量刚好，夜里吃也比较温和。" },
    { name: "煎饺配酸梅汤", cook: "no", min: 20, price: "20-35 元", time: "12-25 分钟", icon: "🥟", reason: "底部焦香，蘸醋解腻，是很有存在感的小餐。" }
  ],
  soup: [
    { name: "冬瓜排骨汤", cook: "yes", min: 35, price: "35-60 元", time: "45-70 分钟", icon: "🍖", reason: "清甜鲜香，适合想吃得舒服一点，也适合顺便补一顿蔬菜。" },
    { name: "番茄肥牛汤饭", cook: "either", min: 28, price: "28-48 元", time: "20-35 分钟", icon: "🍅", reason: "汤酸甜开胃，肥牛提香，配米饭刚好是一顿完整正餐。" },
    { name: "菌菇豆腐汤", cook: "yes", min: 18, price: "18-32 元", time: "18-28 分钟", icon: "🍄", reason: "鲜味足但很轻盈，适合不想吃太油的时候。" },
    { name: "老鸭粉丝汤", cook: "no", min: 24, price: "24-38 元", time: "15-25 分钟", icon: "🦆", reason: "汤头鲜，粉丝顺滑，既暖胃又不会太腻。" },
    { name: "酸辣汤配生煎", cook: "no", min: 25, price: "25-42 元", time: "15-28 分钟", icon: "🥟", reason: "酸辣汤醒胃，生煎补足饱腹感，一软一脆很搭。" }
  ]
};

const typeNames = {
  rice: "米饭",
  noodles: "面食",
  hotpot: "火锅",
  stirfry: "小炒",
  late: "夜宵",
  soup: "汤类"
};

const budget = document.querySelector("#budget");
const budgetOutput = document.querySelector("#budget-output");
const form = document.querySelector("#food-form");
const results = document.querySelector("#results");
const shuffleButton = document.querySelector("#shuffle-button");

function getSelections() {
  return {
    type: document.querySelector('input[name="type"]:checked').value,
    cook: document.querySelector('input[name="cook"]:checked').value,
    budget: Number(budget.value)
  };
}

function updateBudget() {
  budgetOutput.textContent = `${budget.value} 元以内`;
}

function shuffle(list) {
  return [...list].sort(() => Math.random() - 0.5);
}

function pickFoods({ type, cook, budget }) {
  const pool = foods[type];
  const filtered = pool.filter((food) => {
    const matchesCooking = cook === "either" || food.cook === "either" || food.cook === cook;
    return matchesCooking && food.min <= budget;
  });

  const candidates = filtered.length >= 3 ? filtered : pool.filter((food) => food.min <= budget);
  const fallback = candidates.length >= 3 ? candidates : pool;
  return shuffle(fallback).slice(0, 3);
}

function renderCards(items, type) {
  results.innerHTML = items
    .map(
      (item) => `
        <article class="food-card">
          <div class="badge" aria-hidden="true">${item.icon}</div>
          <div>
            <h2>${item.name}</h2>
            <p class="reason">${item.reason}</p>
            <div class="meta" aria-label="${item.name} 信息">
              <span>${typeNames[type]}</span>
              <span>预计 ${item.price}</span>
              <span>${item.time}</span>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function recommend() {
  const selections = getSelections();
  renderCards(pickFoods(selections), selections.type);
}

budget.addEventListener("input", updateBudget);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  recommend();
});
shuffleButton.addEventListener("click", recommend);

updateBudget();
recommend();
