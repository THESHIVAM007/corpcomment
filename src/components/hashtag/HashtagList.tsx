import HashtagItem from "./HashtagItem";

type HashtagListProps = {
  companyList: string[];
  handleSelectCompany: (company: string) => void;
};

export default function HashtagList({
  companyList,
  handleSelectCompany,
}: HashtagListProps) {
  return (
    <ul className="hashtags">
      {companyList.map((company) => {
        return (
          <HashtagItem
            onSelectCompany={handleSelectCompany}
            key={company}
            company={company}
          />
        );
      })}
    </ul>
  );
}