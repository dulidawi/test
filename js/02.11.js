// const listEl = document.querySelector(".list")
// console.log(listEl.parentNode); // доступ до батька
// console.log(listEl.children); // доступ до перших дочірніх елементів
// console.log(listEl.firstElementChild); // доступ до першого елементу
// console.log(listEl.lastElementChild); // доступ до останнього елементу
// console.log(listEl.previousElementSibling); // доступ до першого попереднього сусіда
// console.log(listEl.nextElementSibling); // доступ до наступного сусіднього елементу

// const listRef = document.querySelectorAll(".list .link")
// console.log(listRef);

// const list = document.querySelectorAll(".link")
// console.log(list);

// const img = document.querySelector(".img")
// img.src =
//     "https://tse3.mm.bing.net/th/id/OIP.7-zyZ2NnUnnVlzYKB2ym0QHaE7?rs=1&pid=ImgDetMain&o=7&rm=3";
// img.alt = "nature"
// console.log(img);

// const inputRef = document.querySelector("[type='text']")
// inputRef.value = "anonim"
// inputRef.hidden = true
// console.log(inputRef);

// const titleEl = document.querySelector(".title")
// titleEl.textContent = "Wintertime Sadness"
// titleEl.classList.add("myTitle")
// titleEl.classList.remove("title2")
// titleEl.classList.replace("myTitle", "myTitle2");
// console.log(titleEl.textContent);


// const buttonRef = document.querySelector("[type='button']")
// buttonRef.style.backgroundColor = "blue"
// buttonRef.style.color = "red"
// buttonRef.style.padding = "20px 30px"

// console.log(buttonRef.classList.contains("new-button"));


const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listRef = document.getElementById("gallery")
const itemWorkUp = images.map(({ url, alt }) => `<li><img src="${url}" alt="${alt}"></li>`).join("");
listRef.insertAdjacentHTML("beforeend", itemWorkUp)
console.log(itemWorkUp);

















