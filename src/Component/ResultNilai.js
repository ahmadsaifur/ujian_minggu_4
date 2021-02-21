import React, { Component } from "react";

class ResultNilai extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul className="list-group">
          {this.props.jawaban.map((jawab) => {
            if (jawab.hasil === "Benar") {
              return (
                <li className="list-group-item bg-success">
                  Jawaban {jawab.Soal} -{jawab.hasil}
                </li>
              );
            } else {
              return (
                <li className="list-group-item bg-dark text-white">
                  Jawaban {jawab.Soal}-{jawab.hasil}
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}
export default ResultNilai;
