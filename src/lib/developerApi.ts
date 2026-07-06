import { useState, useEffect } from 'react';

export interface DeveloperConfig {
  name: string;
  contact: {
    phone: string;
    whatsapp: string;
  };
  community: {
    name: string;
    website: string;
    discord: string;
  };
  website: {
    portfolio: string;
  };
}

export const defaultDevConfig: DeveloperConfig = {
  name: "Ran Dev",
  contact: {
    phone: "0895602592430",
    whatsapp: "0895602592430"
  },
  community: {
    name: "Ran Dev Community",
    website: "https://community.randev.com",
    discord: "https://discord.gg/9KUN2byKRM"
  },
  website: {
    portfolio: "https://sfl.gl/x2ic"
  }
};

export function useDeveloperConfig() {
  const [config, setConfig] = useState<DeveloperConfig>(defaultDevConfig);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let active = true;
    fetch("https://raw.githubusercontent.com/mcpeserver/MyAPI/main/config.json")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(data => {
        if (active && data) {
          setConfig({
            name: data.name || defaultDevConfig.name,
            contact: {
              phone: (data.contact && data.contact.phone) || defaultDevConfig.contact.phone,
              whatsapp: (data.contact && data.contact.whatsapp) || defaultDevConfig.contact.whatsapp
            },
            community: {
              name: (data.community && data.community.name) || defaultDevConfig.community.name,
              website: (data.community && data.community.website) || defaultDevConfig.community.website,
              discord: (data.community && data.community.discord) || defaultDevConfig.community.discord
            },
            website: {
              portfolio: (data.website && data.website.portfolio) || defaultDevConfig.website.portfolio
            }
          });
          setLoading(false);
        }
      })
      .catch(err => {
        console.error("Error loading developer configuration:", err);
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return { config, loading };
}
