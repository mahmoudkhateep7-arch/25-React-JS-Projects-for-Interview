import { Minus, Plus } from "lucide-react"
import { useState } from "react"
interface objShape {
  label: string, to: string, children?: objShape[]
}
// const navigationData: objShape[] = [
//   { label: 'Home', to: '/' },
//   {
//     label: "Profile",
//     to: "/profile",
//     children: [
//       {
//         label: "Details",
//         to: "details",
//         children: [
//           {
//             label: "Location",
//             to: "location",
//             children: [{ label: 'City', to: '' }]

//           }
//         ]
//       }
//     ]
//   },
//   {
//     label: "Settings",
//     to: "/settings",
//     children: [
//       {
//         label: "Account",
//         to: "account"
//       },
//       {
//         label: "Security",
//         to: "security",
//         children: [
//           {
//             label: "Login",
//             to: "login"
//           },
//           {
//             label: "Register",
//             to: "register",
//             children: [{ label: 'random data', to: '' }]

//           }
//         ]
//       }
//     ]
//   }
// ];
const navigationData: objShape[] = [
  { label: 'Home', to: '/' },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "details",
        children: [
          {
            label: "Location",
            to: "location",
            children: [{ label: 'City', to: '' }]
          }
        ]
      }
    ]
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      { label: "Account", to: "account" },
      {
        label: "Security",
        to: "security",
        children: [
          { label: "Login", to: "login" },
          {
            label: "Register",
            to: "register",
            children: [{ label: 'random data', to: '' }]
          }
        ]
      }
    ]
  },
  {
    label: "Dashboard",
    to: "/dashboard",
    children: [
      { label: "Analytics", to: "analytics" },
      { label: "Reports", to: "reports" }
    ]
  },
  {
    label: "Support",
    to: "/support",
    children: [
      { label: "Help Center", to: "help" },
      { label: "Contact Us", to: "contact" }
    ]
  }
];


const RenderOneWholeObject = ({ item }: { item: objShape }) => {
  const [isOpne, setIsOpen] = useState(false)
  return (
    <div className={``}>
      <span onClick={() => { item.children && setIsOpen(!isOpne) }}
        className={`flex items-center h-8 capitalize gap-1`}>{item.label}
        {isOpne == false ?

          <>
            {item.children ?
              <Plus className={`cursor-pointer`} size={30} /> : ''}

          </>
          :
          <>
            {item.children ?
              <Minus className={`cursor-pointer`} size={35} /> : ''}

          </>

        }
      </span>
      {item.children && isOpne == true &&
        <div className={`pl-10 py-2`}>

          {item.children.map((item, idx) => {
            return (
              <RenderOneWholeObject key={idx} item={item} />
            )
          })}
        </div>}
    </div>
  )
}
export default function TreeNode() {
  return (
    <section>
      <main className={`flex h-screen overflow-auto flex-col gap-5 p-5
         text-white bg-[#2b55d4] w-100 min-w-50 max-w-full`}>
        {navigationData.map((item, idx) => {
          return (
            <RenderOneWholeObject key={idx} item={item} />
          )
        })}
      </main>

    </section>
  )
}