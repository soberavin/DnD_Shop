import "./rangeInput.css";

type RangeInputProps = {
  value: string;
  onChange: (e: any) => void;
};

export function RangeInput(props: RangeInputProps) {
  return (
    <div className="InputBox">
      {" "}
      Отображать по <span className="itemsNum">{props.value} товаров</span> 
      <input
        type="range"
        min="5"
        max="50"
        step="5"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
