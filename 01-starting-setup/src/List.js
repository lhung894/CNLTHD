import "./List.css";

const List = (props) => {
   const items = props.items;
   const list = [
      {
         id: "id1",
         name: "item1",
      },
      {
         id: "id1",
         name: "item2",
      },
      {
         id: "id3",
         name: "item3",
      },
      {
         id: "id4",
         name: "item4",
      },
      {
         id: "id5",
         name: "item5",
      },
   ];

   const itemList = list.map((item) => {
      return <li key={item.id}>{item.name}</li>;
   });
   return <ul>{itemList}</ul>;
};

export default List;
