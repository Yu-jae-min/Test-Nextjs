import Link from 'next/link';

const ItemList = ({ list }: any) => {
  return (
    <div>
      {list?.map(({ id }: any) => (
        <Link key={id} href={`/view/${id}`}>
          {id}
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
