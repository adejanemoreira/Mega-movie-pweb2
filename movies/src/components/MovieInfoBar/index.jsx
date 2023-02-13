import React from "react";
import PropTypes from "prop-types";
// Helpers
import { calcTime, convertMoney } from "../../helpers/helpers";

// Styles
import { Wrapper, Content } from "./MovieInfoBar.styles";

const MovieInfoBar = ({ time, budget, revenue }) => {
  return (
    <React.Fragment>
      <Wrapper>
        <Content>
          <div className="column">
            <p>Tempo: {time ? calcTime(time) : 0}</p>
          </div>
          <div className="column">
            <p>Orçamento: {budget ? convertMoney(budget) : 0}</p>
          </div>
          <div className="column">
            <p>Receita: {revenue ? convertMoney(revenue): 0}</p>
          </div>
        </Content>
      </Wrapper>
    </React.Fragment>
  );
};

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};

export default MovieInfoBar;
