import { z } from "zod";

const projectSchema = z.object({
  repo: z.string(),
  link: z.string(),
  description: z.string(),
});

export type Project = z.infer<typeof projectSchema>;

export async function getProjects(): Promise<Project[]> {
  return [
    {
      repo: "p2p-db",
      link: "https://github.com/sahilpabale/p2p-db",
      description: "peer to peer key-value database implementation in rust",
    },
    {
      repo: "mapreduce",
      link: "https://github.com/sahilpabale/mapreduce",
      description: "implementation of a distributed map reduce system in rust",
    },
    {
      repo: "nonci-xyz",
      link: "https://nonci.xyz",
      description: "tool for queuing transactions and executing them async using durable nonces to handle crazy bursts",
    },
    {
      repo: "vaxchain",
      link: "https://vaxchain.xyz",
      description: "vaccine supply chain on solana blockchain",
    },
    {
      repo: "cubik-pulse",
      link: "https://github.com/cubik-so/CubikPulse",
      description: "in-house indexer for cubik program",
    },
    {
      repo: "sonic-sdk",
      link: "https://github.com/sahilpabale/sonic-sdk",
      description: "sonic sdk enables you to quickly setup and integrate your decentralized community in a flash",
    },
  ];
}
