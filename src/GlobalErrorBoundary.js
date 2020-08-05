import React from 'react';
import { createBrowserHistory } from 'history';
import { node, bool } from 'prop-types';
import { connect } from 'react-redux';

class GlobalErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  retry = () => {
    const history = createBrowserHistory();
    history.go();
  };

  render() {
    const { children, globalError } = this.props;
    const { error } = this.state;

    if (globalError || error) {
      return (
        <section className="global-err center-align">
          <div className="global-err__content">
            <div>Problem z komunikacją</div>
            <div className="center-align">
              <button
                className="btn btn--dark"
                onClick={this.retry}
                type="button"
              >
                Spróbuj ponownie
              </button>
            </div>
          </div>
        </section>
      );
    }

    return children;
  }
}

GlobalErrorBoundary.propTypes = {
  children: node.isRequired,
  globalError: bool.isRequired
};

const mapStateToProps = (state) => ({
  globalError: state.globalError
});

export default connect(mapStateToProps)(GlobalErrorBoundary);
