import $ from "jquery"


    //Tap 컴포넌트 생성, 구조분해객체로 기본, 활성화, 클릭 이벤트 들고옴
    const Tab = ({ label, activeTab, onClick }) => {
        const handleClick = () => {
          onClick(label);
        };

        return(
            //tab 이 활성화된 라벨임 ? 그럼 활성화 : 아니면 기본값
            <div className={`tab ${activeTab === label ? `activ`: ``}
            onClick={handleClick}
            `}>
                {label}
            </div>
        )

    };

    export default Tab

