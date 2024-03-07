const Places = ({ dadoCidades }) => {
  return (
    <div>
      {dadoCidades.flat().map((cidade, index) => (
        <div
          key={index}
          className="mb-3 mt-5"
        >
          <p> Local de doação: {cidade.name}</p>
          <p> Endereço: {cidade.address}</p>
          <p className="mb-3"> Cidade: {cidade.city}</p>
          <a
            href={cidade.siteURL}
            className="border-[#FFC98B] bg-[#FFC98B] hover:bg-[#FFB865] px-4 py-2 rounded-full text-xs"
          >
            MAIS INFORMAÇÕES
          </a>
        </div>
      ))}
    </div>
  );
};

export default Places;
