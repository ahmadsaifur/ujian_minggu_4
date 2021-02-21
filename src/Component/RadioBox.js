import React, { Component } from "react";

class RadioBox extends Component {
  constructor(props) {
    super(props);
  }
  terimaKlik = (event) => {
    let apa = event.target.value;
    this.setState({ jawaban: apa });

    this.addScore(apa);
  };
  addScore = (nilaiJawaban) => {
    this.props.funcJawab({
      soal_no: this.props.no,
      jawaban: nilaiJawaban,
    });
  };
  render() {
    return (
      <div>
        <label>
          {this.props.no}. {this.props.data.soal}
        </label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name={"soal" + this.props.no}
            id="flexRadioDefault1"
            onChange={this.terimaKlik}
            value={this.props.data.a}
          ></input>
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {this.props.data.a}
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name={"soal" + this.props.no}
            id="flexRadioDefault2"
            value={this.props.data.b}
            onChange={this.terimaKlik}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {this.props.data.b}
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name={"soal" + this.props.no}
            id="flexRadioDefault2"
            value={this.props.data.c}
            onChange={this.terimaKlik}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {this.props.data.c}
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name={"soal" + this.props.no}
            id="flexRadioDefault2"
            value={this.props.data.d}
            onChange={this.terimaKlik}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {this.props.data.d}
          </label>
        </div>
      </div>
    );
  }
}
export default RadioBox;
