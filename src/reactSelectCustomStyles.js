const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      
    }),
  
    control: (_, { selectProps: { width }}) => ({
      width: width
    }),
  
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
}

export default customStyles;