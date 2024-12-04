type SimilarProps = {
    percent: number;
};
const SimilarTag: React.FC<SimilarProps> = ({ percent }) => {
    return (
        <div>
            <div className="loader">
                <div className="intern">{(percent * 100).toFixed(2)}%</div>
                <div className="external-shadow">
                    <div className="central"></div>
                </div>
            </div>
        </div>
    );
};

export default SimilarTag;
