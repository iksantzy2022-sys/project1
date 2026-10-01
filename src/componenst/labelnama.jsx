function LabelNama(props) {
  return (
    <div className="label-nama">
      <label htmlFor={props.id}>{props.label}</label>
      <input type="text" id={props.id} name={props.name} />
    </div>
  );
}

export default LabelNama;