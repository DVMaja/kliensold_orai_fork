interface HelloProps {
  name: string;
  age: number;
  onCompanyClick: () => void;
  nickname?: string;
  children?: React.ReactNode;
}

const Hello = ({
  name,
  age,
  onCompanyClick,
  nickname,
  children,
}: HelloProps) => {
  const logSomething = (num: number) => {
    console.log("ÜDV!", num);
  };

  const handleLogClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  logSomething(50);

  if (age < 18) {
    return (
      <>
        <h1>Kiskorú vagy!</h1>
        <button onClick={() => logSomething(42)}>Logolás</button>
        <button onClick={handleLogClick}>Log eseményobjektum</button>
        <button onClick={onCompanyClick}>+1</button>
      </>
    );
  }

  return (
    <>
      <h1>Hello {name}!</h1>
      <p>Jó, hogy itt vagy!</p>
      <p>Beceneved: {nickname}</p>
      {children}
    </>
  );
  // ? : ternary operator
  // return age < 18 ? <h1>Kiskorú vagy</h1> : <h1>Üdv, {name}</h1>;
};

export default Hello;
