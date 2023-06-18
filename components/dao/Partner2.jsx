const Partner2 = () => {
  const partnerItem = [
    {link:'https://www.cameltoecan.com/',image:'partner_dao_1'},
    {link:'https://swap.crodex.app/#/swap',image:'partner_dao_2'},
    {link:'https://phenix.finance/',image:'partner_dao_8'},
    {link:'https://www.cameltoecan.com/',image:'partner_dao_10'},
    {link:'https://swap.crodex.app/#/swap',image:'partner_dao_10'},
    {link:'https://phenix.finance/',image:'partner_dao_10'},
    {link:'https://www.cameltoecan.com/',image:'partner_dao_2'},
    {link:'https://swap.crodex.app/#/swap',image:'partner_dao_12'},
    {link:'https://phenix.finance/',image:'partner_dao_13'},
  ];
  return (
    <>
      {partnerItem.map((item, i) => (
        <a
          href={item.link}
          className="flex flex-shrink-0 items-center justify-center rounded-2.5xl bg-jacarta-900 opacity-80 p-4 p-6"
          key={i}
        >
          <img src={`/images/dao/${item.image}.jpg`} alt="partner item" />
        </a>
      ))}
    </>
  );
};

export default Partner2;
