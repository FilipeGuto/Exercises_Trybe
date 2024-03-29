import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { submitProfessionalInfo } from '../redux/actions/action';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';

class ProfessionalForm extends Component {
  constructor() {
    super();

    this.state = {
      curriculo: '',
      cargo: '',
      descricao: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onSubmitForm() {
    const { history, dispatchSetValue } = this.props;

    dispatchSetValue(this.state);
    history.push('/formDisplay');
  }

  render() {
    const { curriculo, cargo, descricao } = this.state;
    return (
      <form>
        <fieldset>
          <TextArea
            label="Resumo do currículo: "
            value={ curriculo }
            name="curriculo"
            maxLength="1000"
            onChange={ this.handleChange }
            required
          />
          <Input
            label="Cargo:"
            name="cargo"
            type="text"
            value={ cargo }
            onChange={ this.handleChange }
            required
          />
          <TextArea
            label="Descrição do cargo: "
            name="descricao"
            maxLength="500"
            onChange={ this.handleChange }
            value={ descricao }
            required
          />
          <Button label="enviar" onClick={ this.onSubmitForm } />
        </fieldset>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (professionalInfo) => dispatch(
    submitProfessionalInfo(professionalInfo),
  ),
});

const mapStateToProps = (state) => ({
  professionalInputs: state.formReducer.professionalInputs,
});

ProfessionalForm.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfessionalForm);
