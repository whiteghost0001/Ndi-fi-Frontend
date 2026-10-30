import { motion } from "framer-motion";

interface ValueProps {
  name: string;
  totalDeposits: string;
  curator: string;
  liquidity: string;
  collateralCount: number;
  apy: string;
}

const VaultRow = ({
  name,
  totalDeposits,
  curator,
  liquidity,
  collateralCount,
  apy,
}: ValueProps) => {
  return (
    <motion.div
      className="flex flex-row items-center justify-between bg-[#547F7F33] px-6 py-4 border-b border-[#547F7F99] last:border-b-0"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Vault Name */}
      <div className="flex items-center gap-3 w-1/5">
        <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
        <div>
          <p className="text-white font-medium">{name}</p>
        </div>
      </div>

      {/* Total Deposits */}
      <div className="w-1/5">
        <p className="text-white font-medium">${totalDeposits}</p>
        <p className="text-sm text-gray-400">${totalDeposits} pUSD</p>
      </div>

      {/* Curator */}
      <div className="w-1/5 space-y-2">
        <div className="flex items-center gap-3 ">
          <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
          <p className="text-white text-sm">{curator}</p>
        </div>
        <div className="flex items-center gap-3 ">
          <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
          <p className="text-white text-sm">{curator}</p>
        </div>
      </div>

      {/* Liquidity */}
      <div className="w-1/5">
        <p className="text-white font-medium">${liquidity}</p>
        <p className="text-sm text-gray-400">${liquidity} pUSD</p>
      </div>

      {/* Collateral */}
      <div className="flex items-center gap-2 w-1/5">
        <div className="flex -space-x-2">
          <div className="w-6 h-6 bg-gray-400 rounded-full border border-gray-800"></div>
          <div className="w-6 h-6 bg-gray-400 rounded-full border border-gray-800"></div>
          <div className="w-6 h-6 bg-gray-400 rounded-full border border-gray-800"></div>
        </div>
        <span className="text-gray-300">+{collateralCount}</span>
      </div>

      {/* Supply APY */}
      <div className="flex items-center gap-2 w-[10%]">
        <div className="flex -space-x-2">
          <div className="w-6 h-6 bg-gray-400 rounded-full border border-gray-800"></div>
          <div className="w-6 h-6 bg-gray-400 rounded-full border border-gray-800"></div>
          <div className="w-6 h-6 bg-gray-400 rounded-full border border-gray-800"></div>
        </div>
        <span className="text-white font-medium">{apy}%</span>
      </div>
    </motion.div>
  );
};

export default VaultRow;
