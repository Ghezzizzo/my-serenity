const achivements = [
  {
    id: 0,
    title: "Prima prova",
    description:
      "Hai portato a termine la tua prima seduta meditativa, complimenti!",
    done: false,
  },
  {
    id: 1,
    title: "Pausa caffè",
    description: "Ti sei rilassato per ben 5 minuti consecutivi!",
    done: false,
  },
  {
    id: 2,
    title: "Sveglia relax",
    description: "Hai provato la meditazione mattutina",
    done: false,
  },
];

const doneList = () => {
  const list = [];
  achivements.forEach((achivement) => {
    list.push(achivement.done);
  });
  return list;
};

// export default achivements;
export { achivements, doneList };
