import React, { Suspense } from "react";
import DataFectchServer from "./DataFetchServer";
import Loader from "../loading";

async function page(props) {
  const searchParam = await props.searchParams;

  return (
    <div className="grid grid-cols-2 h-screen items-center">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolorum magni
        ipsam, minus beatae, asperiores ipsa aut veniam impedit, officia dicta
        tempora! Corporis ullam explicabo consequatur amet consequuntur, iusto
        officia quaerat quidem dignissimos quisquam provident vel voluptatibus
        dolor enim quas neque dolorem sed quo reiciendis tempore alias rem
        perferendis. Explicabo unde ab maiores fuga ad delectus voluptate
        commodi ea minima! Officia obcaecati unde iste debitis illum, numquam
        similique nobis deleniti blanditiis totam perspiciatis laboriosam saepe
        sequi sed odit et, voluptatibus consectetur deserunt. Nobis ducimus vero
        deleniti cum voluptate, culpa blanditiis temporibus sunt sequi, aliquid
        quaerat, nisi ab omnis qui cumque?
      </p>
      <Suspense fallback={<Loader />}>
        <DataFectchServer searchParam={searchParam} />
      </Suspense>
    </div>
  );
}

export default page;
