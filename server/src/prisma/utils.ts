// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
BigInt.prototype.toJSON = function () {
  return parseBigInt(this);
};

export function parseBigInt(bigint: bigint): number {
  return bigint !== null && bigint !== undefined && parseInt(bigint.toString());
}
