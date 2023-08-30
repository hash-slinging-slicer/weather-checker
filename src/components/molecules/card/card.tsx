export interface CardProps {
    kota: string;
    negara: string;
    tanggal: string;
    status: string;
    suhuC: number;
    feelSuhuC: number;
    uv: number;
    angin: number;
    humadity: number;
}

const Card = (props: CardProps): JSX.Element => {
    const {kota, negara, tanggal, status, suhuC, feelSuhuC, uv, angin, humadity} = props;
    return (
        <div className="mx-auto p-4 h-screen flex justify-center">
            <div className="flex flex-wrap">
                <div className="w-full   px-2">
                    <div className="bg-gray-900 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full bg-white dark:bg-gray-600">
                        <div className="px-6 py-6 relative">
                            <div className="flex mb-4 justify-between items-center">
                                <div>
                                    <h5 className="mb-0 font-medium text-xl">{kota}, {negara}</h5>
                                    <h6 className="mb-0">{tanggal}</h6><small>{status}</small>
                                </div>
                                <div className="text-right">
                                    <h3 className="font-bold text-4xl mb-0"><span>{suhuC}&deg;</span></h3>
                                </div>
                            </div>
                            <div className="block sm:flex justify-between items-center flex-wrap">
                                <div className="w-full sm:w-1/2">
                                    <div className="flex mb-2 justify-between items-center"><span>Feels like</span><small className="px-2 inline-block">{feelSuhuC}&nbsp;&deg;</small></div>
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <div className="flex mb-2 justify-between items-center"><span>Humadity</span><small className="px-2 inline-block">{humadity}%</small></div>
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <div className="flex mb-2 justify-between items-center"><span>UV</span><small className="px-2 inline-block">{uv}</small></div>
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <div className="flex mb-2 justify-between items-center"><span>Wind</span><small className="px-2 inline-block">{angin} mph</small></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card