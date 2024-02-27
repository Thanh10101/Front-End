'use client'
import dynamic from "next/dynamic";
import Loading from "@/components/public/loading";
const AppProduct = dynamic(() => import("@/components/client/app.product"), {
  loading: () => <Loading/>,
  ssr: false
})


export default function BasicExample() {
  return (
    <AppProduct />
  );
}

