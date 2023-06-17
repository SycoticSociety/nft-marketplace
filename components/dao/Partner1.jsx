const Partner1 = () => {
  const partnerItem = [
    "partner_dao_1",
    "partner_dao_2",
    "partner_dao_3",
    "partner_dao_4",
    "partner_dao_5",
    "partner_dao_6",
    "partner_dao_7",
    "partner_dao_1",
    "partner_dao_2",
    "partner_dao_3",
    "partner_dao_4",
    "partner_dao_5",
    "partner_dao_6",
    "partner_dao_7",
  ];
  return (
    <>
      {partnerItem.map((item, i) => (
        <div
          className="flex flex-shrink-0 items-center justify-center rounded-2.5xl bg-jacarta-900 p-4 opacity-80"
          key={i}
        >
          <img src={`/images/dao/${item}.jpg`} alt="partner item" />
        </div>
      ))}
    </>
  );
};

export default Partner1;
