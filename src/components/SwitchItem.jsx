import Item from './Item';

const SwitchItem = ({ items }) => {
   return items.map((item) => {
      switch (item.type) {
         case 'male':
            return <Item color='blue' item={item} key={item.title} />;
         case 'female':
            return <Item color='orange' item={item} key={item.title} />;
         default:
            return <Item color='black' item={item} key={item.title} />;
      }
   });
};

export default SwitchItem;
