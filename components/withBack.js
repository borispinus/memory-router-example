import React from 'react';

const withBack = (url) => (Component) => (props) => {
  const handleBackButtonClick = () => {
    if (props.history) {
      props.history.push(url);
    }
  };
  return (
    <div>
      <a onClick={handleBackButtonClick}>Назад</a>
      <Component {...props}/>
    </div>
  )
}

export  default withBack
