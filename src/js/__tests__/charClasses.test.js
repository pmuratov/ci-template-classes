import {
  Character,
  Bowman,
  Swordsman,
  Magician,
  Undead,
  Zombie,
  Daemon,
} from "../charClasses";

test.each([
  ["tooLongName", "Bowman"],
  ["s", "Bowman", "Wrong name"],
  [132, "Bowman", "Wrong name"],
])("Name (>2 && <10), string.", (name, type) => {
  expect(new Character(name, type)).toBe(new Error("Wrong name"));
});

test("only allowed char type is created", () => {
  expect(new Character("ValidName", "Dragonborn")).toEqual(
    new Error("Wrong type")
  );
});

test("leveling up 0hp", () => {
  let сhar = new Bowman("ValidName", "Bowman");
  сhar.damage(200);
  expect(сhar.levelUp()).toEqual(
    new Error("Dead don`t level up. Not sure what to do with an Undead tho...")
  );
});

test("leveling up, level+1, attack and defence +20%, health 100", () => {
  let сhar = new Bowman("ValidName", "Bowman");
  expect(char.levelUp()).toEqual({
    name: "ValidName",
    type: "Bowman",
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  });
});

test("taking damage", () => {
  let сhar = new Bowman("ValidName", "Bowman");
  expect(сhar.damage(25).health).toEqual(81.25);
});

test("Bowman created should have AttackDefence 25/25", () => {
  expect(new Bowman("ValidName", "Bowman")).toEqual({
    name: "ValidName",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test("Swordsman created should have AttackDefence 40/10", () => {
  expect(new Swordsman("ValidName", "Swordsman")).toEqual({
    name: "ValidName",
    type: "Swordsman",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test("Magician created should have AttackDefence 10/40", () => {
  expect(new Magician("ValidName", "Magician")).toEqual({
    name: "ValidName",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test("Undead created should have AttackDefence 25/25", () => {
  expect(new Undead("ValidName", "Undead")).toEqual({
    name: "ValidName",
    type: "Undead",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test("Zombie created should have AttackDefence 40/10", () => {
  expect(new Zombie("ValidName", "Zombie")).toEqual({
    name: "ValidName",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test("Daemon created should have AttackDefence 10/40", () => {
  expect(new Daemon("ValidName", "Daemon")).toEqual({
    name: "ValidName",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
