import { Component, ErrorInfo, ReactNode } from 'react';
import './styles.scss';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h3>Something went wrong.</h3>
          <h4>Please try again.</h4>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
