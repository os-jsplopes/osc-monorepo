import React from "react";

export interface I<%= name %>Props {
  /** Please fill a property description */
  propertyName: boolean;
}

/** <%= name %> Component */
const <%= name %>: React.FC<I<%= name %>Props> = ({ propertyName }: I<%= name %>Props) => <div>IMPLMENT YOUR COMPONENT</div>;

export default <%= name %>;
