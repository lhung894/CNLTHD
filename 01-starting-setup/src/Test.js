const Form = () => {
   function handleSubmit(e) {
      e.preventDefault();
      console.log("You clicked submit.");
   }

   return (
      <form onSubmit={handleSubmit}>
         <button type="submit">Submit</button>
      </form>
   );
};

const itemData = items.map((item) => {
   return {
      id: item.maThiSinh,
      name: item.hoTen,
   };
});

const itemData = items.map((item) => {
   return {
      id: item.maThiSinh,
      name: item.hoTen,
   };
});
