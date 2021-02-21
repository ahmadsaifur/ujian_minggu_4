import React, { Component } from "react";

class Essay extends Component {
  constructor(props) {
    super(props);
    this.state = { jawaban: "", textvalue: 0 };
  }

  eventHandler = (event) => {
    let isi = event.target.value;
    this.setState({ jawaban: isi });
    console.log(isi);
    this.addScore(isi);
  };
  addScore = (nilaiJawaban) => {
    this.props.funcJawab({
      soal_no: this.props.no,
      jawaban: nilaiJawaban,
    });
  };
  eventHandler = (event) => {
    this.inputText = event.target.value;
  };
  submitCode = () => {
    const fn = new Function(this.inputText);
    const resultfn = fn();
    this.setState({ code: resultfn });
    this.addScore(resultfn);
  };
  render() {
    return (
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          {this.props.no}. {this.props.data.soal}
        </label>
        <p>Jawabannya : </p>

        <div className="container p-3 mb-2 bg-light text-dark">
          {this.state.code}
        </div>
        <textarea
          onChange={this.eventHandler}
          className="form-control"
          id={this.props.no}
          rows="3"
        ></textarea>
        <button
          onClick={this.submitCode}
          type="button"
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    );
  }
}
export default Essay;
