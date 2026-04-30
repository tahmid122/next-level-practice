type RichPeopleVehicle = {
  car: string;
  bike: string;
  cng: string;
};

type myVehicle1 = "bike" | "car" | "cng";
type myVehicle2 = keyof RichPeopleVehicle;

const myCar: myVehicle2 = "car";

type TUser = {
  id: number;
  name: string;
  address: {
    city: string;
    country: string;
  };
};
const user: TUser = {
  id: 222,
  name: "Tahmid",
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};
const myName = user.name;
const myId = user["id"];

const getPropertyFromObject = <T>(obj: T, key: keyof T) => {
  return obj[key];
};
const result = getPropertyFromObject(user, "id");
console.log(result);

const result2 = getPropertyFromObject(
  { name: "Tahmid", class: "Honours" },
  "class",
);

console.log(result2);
