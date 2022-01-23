import React, { FC, useState } from "react";
import { fetchApi } from "../../services/api-helpers";
import Quotes, { IQuotesProps } from "../../molecules/Quotes/Quotes";
import SearchInput from "../../atoms/SearchInput/SearchInput";
import "./SearchPage.scss";

const API_URL = "https://api.chucknorris.io/jokes/search";

const SearchPage: FC = () => {
  const [data, setData] = useState<IQuotesProps>({
    total: 0,
    result: [],
    active: false,
  });

  const handleSearch = async (value: string) => {
    const formattedUrl = API_URL + "?query=" + value;
    const results = await fetchApi(formattedUrl);
    const formattedData = {
      ...results,
      active: true,
    };
    setData(formattedData);
  };

  return (
    <section className="search-page">
      <form onSubmit={(e) => e.preventDefault()}>
        <SearchInput
          placeholder="Type whatever you want"
          onApply={handleSearch}
        />
      </form>
      <Quotes total={data.total} result={data.result} active={data.active} />
    </section>
  );
};

export default SearchPage;
