// База данных
let listData = [
  {
    name: "Олег",
    surname: "Иванович",
    lastname: "Мостин",
    age: 18,
    hobby: "Танцы",
  },
  {
    name: "Юлия",
    surname: "Александровна",
    lastname: "Воронина",
    age: 21,
    hobby: "Музыка",
  },
  {
    name: "Евгения",
    surname: "Анатольевна",
    lastname: "Ильина",
    age: 18,
    hobby: "Спорт",
  },
  {
    name: "Валерий",
    surname: "Иванович",
    lastname: "Воронин",
    age: 19,
    hobby: "Чтение",
  },
];

// Создание элементов
const $app = document.getElementById("app"),
  $addForm = document.getElementById("add-form"),
  $nameInp = document.getElementById("add-form__name-inp"),
  $surenameInp = document.getElementById("add-form__surename-inp"),
  $lastnameInp = document.getElementById("add-form__lastname-inp"),
  $ageInp = document.getElementById("add-form__age-inp"),
  $hobbyInp = document.getElementById("add-form__hobby-inp"),
  $table = document.createElement("table"),
  $tableHead = document.createElement("thead"),
  $tableBody = document.createElement("tbody");

($tableHeadTr = document.createElement("tr")),
  ($tableHeadThFio = document.createElement("th")),
  ($tableHeadThAge = document.createElement("th")),
  ($tableHeadThBirthday = document.createElement("th")),
  ($tableHeadThHobby = document.createElement("th"));

$table.classList.add("table");

$tableHeadThFio.textContent = "ФИО";
$tableHeadThAge.textContent = "Возраст";
$tableHeadThBirthday.textContent = "Год Рождения";
$tableHeadThHobby.textContent = "Хобби";

$tableHeadTr.append($tableHeadThFio);
$tableHeadTr.append($tableHeadThAge);
$tableHeadTr.append($tableHeadThBirthday);
$tableHeadTr.append($tableHeadThHobby);

$tableHead.append($tableHeadTr);
$table.append($tableHead);
$table.append($tableBody);
$app.append($table);

function createUserTr(oneUser) {
  const $userTr = document.createElement("tr"),
    $userFio = document.createElement("th"),
    $userAge = document.createElement("th"),
    $userBirthday = document.createElement("th"),
    $userHobby = document.createElement("th");

  $userFio.textContent = oneUser.fio;
  $userAge.textContent = oneUser.age;
  $userBirthday.textContent = oneUser.Birthday;
  $userHobby.textContent = oneUser.hobby;

  $userTr.append($userFio);
  $userTr.append($userAge);
  $userTr.append($userBirthday);
  $userTr.append($userHobby);

  return $userTr;
}

// Рендер
function render(arrData) {
  $tableBody.innerHTML = "";
  // Подготовка
  const copyListData = [...arrData];
  for (const oneUser of copyListData) {
    oneUser.fio = oneUser.name + " " + oneUser.surname + " " + oneUser.lastname;

    oneUser.Birthday = 2022 - oneUser.age;
  }

  console.log(copyListData);
  // Отрисовка

  for (const oneUser of copyListData) {
    const $newTr = createUserTr(oneUser);

    $tableBody.append($newTr);
  }
}

render(listData);

// Добавление
$addForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Валидация
  if ($nameInp.value.trim() == "") {
    var newBlock = "<span style='color:tomato'>Введите Имя</span>";
    $nameInp.insertAdjacentHTML("beforebegin", newBlock);
    return;
  } 

  if ($surenameInp.value.trim() == "") {
    var newBlock = "<span style='color:tomato'>Введите фамилию</span>";
    $surenameInp.insertAdjacentHTML("beforebegin", newBlock);
    return;
  }

  if ($lastnameInp.value.trim() == "") {
    var newBlock = "<span style='color:tomato'>Введите отчество</span>";
    $lastnameInp.insertAdjacentHTML("beforebegin", newBlock);
    return;
  }
  if ($ageInp.value.trim() == "") {
    var newBlock = "<span style='color:tomato'>Введите возраст</span>";
    $ageInp.insertAdjacentHTML("beforebegin", newBlock);
    return;
  }


  listData.push({
    name: $nameInp.value.trim(),
    surname: $surenameInp.value.trim(),
    lastname: $lastnameInp.value.trim(),
    age: parseInt($ageInp.value.trim()),
    hobby: $hobbyInp.value.trim(),
  });
  render(listData);
});
