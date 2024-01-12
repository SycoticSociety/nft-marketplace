const Partner1 = () => {
  const partnerItem = [
    {link:'https://www.cameltoecan.com/',image:'partner_dao_1'},
    {link:'https://swap.crodex.app/#/swap',image:'partner_dao_2'},
   
    {link:'https://www.cameltoecan.com/',image:'partner_dao_1'},
    {link:'https://swap.crodex.app/#/swap',image:'partner_dao_2'},
    {link:'https://www.geckoterminal.com/',image:'partner_dao_10'},
    {link:'https://www.cameltoecan.com/',image:'partner_dao_1'},
    {link:'https://swap.crodex.app/#/swap',image:'partner_dao_2'},
    {link:'https://www.spatial.io/s/Sycotic-Society-Token-NFT-Gallery-6313041cebd6c80001d718ea?share=5572695680266736611/',image:'partner_dao_4'},
  ];
  return (
    <>
      {partnerItem.map((item, i) => (
        <a
          href={item.link}
          className="flex flex-shrink-0 items-center justify-center rounded-2.5xl  p-4 opacity-80 bg-jacarta-200 dark:bg-jacarta-900"
          key={i}
        >
          <img src={`/images/dao/${item.image}.jpg`} alt="partner item" />
        </a>
      ))}
    </>
  );
};

export default Partner1;
