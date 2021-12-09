function getRandomArray(len: number): number[] {
  const arr = [];
  for (let i = 0; i < len; i++) {
    const num = Math.floor(Math.random() * 1000);
    arr.push(num);
  }
  return arr;
}

interface IObject {
  name: string;
  description: string;
}

function getRandomObject(len: number): IObject[] {
  const arr: IObject[] = [];
  for (let i = 0; i < len; i++) {
    const obj: IObject = {
      name: "",
      description: "",
    };

    const num = Math.floor(Math.random() * 1000);
    obj.name = num.toString();
    obj.description = new Array(5 + Math.floor(Math.random() * 20))
      .fill(num.toString())
      .join(" ");
    arr.push(obj);
  }
  return arr;
}

function listOl(body: HTMLElement, arr: number[]) {
  const len = arr.length;
  const list = document.createElement("ol");

  for (let i = 0; i < len; i++) {
    const item = document.createElement("li");
    item.textContent = arr[i].toString();
    list.append(item);
  }

  body.append(list);
}

function listOlObjects(body: HTMLElement, arr: IObject[]) {
  const len = arr.length;
  const list = document.createElement("ol");
  const array: HTMLElement[] = [];
  const div = document.createElement("div");
  const button = document.createElement("button");
  button.innerText = "Added";

  for (let i = 0; i < len; i++) {}

  body.append(list);
  body.append(div);

  body.append(button);
}

function createIteminObj(parent: HTMLElement, itemData: IObject): void {
  const item = document.createElement("li");
  array.push(item);

  item.addEventListener("click", () => {
    div.innerText = arr[i].description;

    array.forEach(i => {
      i.style.backgroundColor = null;
    });

    item.style.backgroundColor = "red";
    button.onclick = () => {
      addField(body, arr[i], value => {
        item.textContent = value.name;
        div.textContent = value.description;
        arr[i] = value;
      });
    };
  });

  item.textContent = arr[i].name;
  list.append(item);
}

function addField(body: HTMLElement, item: IObject, onOk: (value: IObject) => void) {
  const divField = document.createElement("div");

  const inputName = document.createElement("input");
  const inputDescription = document.createElement("input");

  const buttonOk = document.createElement("button");
  const buttonCancel = document.createElement("button");

  divField.append(inputName);
  divField.append(inputDescription);
  divField.append(buttonOk);
  divField.append(buttonCancel);

  buttonOk.textContent = "Ok";
  buttonCancel.textContent = "No";

  inputName.value = item.name;
  inputDescription.value = item.description;

  let nextValue: IObject = { ...item };

  inputName.oninput = () => {
    nextValue.name = inputName.value;
  };
  inputDescription.oninput = () => {
    nextValue.description = inputDescription.value;
  };

  buttonOk.onclick = () => {
    onOk(nextValue);
    divField.remove();
  };

  buttonCancel.onclick = () => {
    divField.remove();
  };

  body.append(divField);
}

listOlObjects(document.body, getRandomObject(10));

console.log("Hello World!");
