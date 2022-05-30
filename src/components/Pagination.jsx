import React from "react";

import { Button , Select, ButtonGroup } from  "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'

const Pagination = ({setPage, setLimit}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;
  // {console.log(props.setPage)}
  {console.log(setPage)}

  return (
     <ButtonGroup >
  <Button data-cy="pagination-first-button">First</Button>
      <Button data-cy="pagination-previous-button">Previous</Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button">Next</Button>
      <Button data-cy="pagination-last-button">Last</Button>
   
</ButtonGroup>


   
  );
};

export default Pagination;
