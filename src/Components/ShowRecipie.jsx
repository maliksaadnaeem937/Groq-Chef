import React from "react";

export default function ShowRecipie({ data }) {
   return <div dangerouslySetInnerHTML={{ __html: data }} />; ;
}
