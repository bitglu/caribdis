import React from 'react'
import { TravelsInterface } from "@/ts/interfaces/travels.interface";


export default function CompaniesPageComponent(props: {
    companies: TravelsInterface[] | null;
  }) {
    const { companies } = props
    console.log('hola');
    
    
  return (
    <div>companies</div>
  )
}

