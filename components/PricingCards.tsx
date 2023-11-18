import { CheckIcon } from "lucide-react";
import Link from "next/link";
import CheckButton from "./CheckButton";

const tiers = [
  {
    name: "starter",
    id: null,
    href: "#",
    priceMonthly: null,
    description: "For individuals",
    features: [
      "10 Chats",
      "20 Messages",
      "1 Users",
      "Unlimited Files",
      "Unlimited Storage",
    ],
  },
  {
    name: "pro",
    id: "si_fdgdfgdfg",
    href: "#",
    priceMonthly: "$45",
    description: "Full featured for teams",
    features: [
      "Unlimited Chats",
      "Unlimited Messages",
      "Unlimited Users",
      "Unlimited Files",
      "Unlimited Storage",
      "Unlimited Integrations",
      "Unlimited Support",
      "Unlimited Customization",
      "Unlimited Everything",
    ],
  },
];

function PricingCards({ redirect }: { redirect: boolean }) {
  return (
    <div>
      <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray900/10 sm:p-10"
          >
            <div>
              <h3
                id={tier.id + tier.name}
                className="text-base font-semibold leading-7 text-indigo-600"
              >
                {tier.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-x-2">
                {tier.priceMonthly ? (
                  <>
                    <span className="text-5xl font-bold tracking-tight text-gray-900 ">
                      {tier.priceMonthly}
                    </span>

                    <span className="text-base font-semibold leading-7 text-gray-600">
                      /month
                    </span>
                  </>
                ) : (
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    Free
                  </span>
                )}
              </div>
              <p className="mt-6 text-base leading-7 text-gray-600">
                {tier.description}
              </p>
            </div>
            <ul
              role="list"
              className="mt-10 space-y-4 text-sm leading-6 text-gray-600 "
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
            {redirect ? (
              <Link
                href="/register"
                className="mt-8 rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold 
                leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
                focus-visible:outline-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80"
              >
                Get started Today
              </Link>
            ) : (
              tier.id && <CheckButton />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingCards;
