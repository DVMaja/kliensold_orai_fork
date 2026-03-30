interface ButtonsProps {
  text: string[];
}

const Buttons = ({ text }: ButtonsProps) => {
  return (
    <div id="betuk">
      {text.map((l, i) => (
        <button key={i} disabled={false}>
          {l}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
