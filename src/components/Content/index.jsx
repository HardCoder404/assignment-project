"use client"
import { ChartNoAxesColumn, Award, File,MoveRight} from "lucide-react"
import { useState,useEffect } from 'react';
import LineChart from "../LineChart";
import PieChart from "../PieChart";
import { TbCircleNumber1Filled,TbCircleNumber2Filled,TbCircleNumber3Filled } from "react-icons/tb";



export default function HomeContent() {
    
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

// State for quick statistics
const [rank, setRank] = useState(1);
const [percentile, setPercentile] = useState(30);
const [currentScore, setCurrentScore] = useState(10);

// State for modal input values
const [modalRank, setModalRank] = useState(rank);
const [modalPercentile, setModalPercentile] = useState(percentile);
const [modalCurrentScore, setModalCurrentScore] = useState(currentScore);

const handleSave = () => {
  if (validateInputs(modalRank, modalPercentile, modalCurrentScore)) {
    // Update state with modal values

    setRank(modalRank);
     const newPercentile = parseFloat(modalPercentile);
    if (!isNaN(newPercentile) && newPercentile >= 0 && newPercentile <= 100) {
      setPercentile(newPercentile);
      closeModal();
    }
    setCurrentScore(modalCurrentScore);
    closeModal();
  }
};



 // State for validation errors
 const [errors, setErrors] = useState({ rank: '', percentile: '', currentScore: '' });
 const validateInputs = (rank, percentile, currentScore) => {
  let valid = true;
  const newErrors = { rank: '', percentile: '', currentScore: '' };

  // Validate rank
  if (rank === '' || isNaN(rank)) {
    newErrors.rank = 'Required | should be a number';
    valid = false;
  }

  // Validate percentile
  if (percentile === '' || isNaN(percentile) || percentile < 0 || percentile > 100) {
    newErrors.percentile = 'Required | percentile 0-100';
    valid = false;
  }

  // Validate current score
  if (currentScore === '' || isNaN(currentScore) || currentScore < 0 || currentScore > 15) {
    newErrors.currentScore = 'Required | score 0-15';
    valid = false;
  }

  setErrors(newErrors);
  return valid;
};

useEffect(() => {
  validateInputs(modalRank, modalPercentile, modalCurrentScore);
}, [modalRank, modalPercentile, modalCurrentScore]);

  return (
      <div className="flex-1 p-4 bg-white h-full pt-24 ml-64">
        <div className="font-medium  text-gray-500 text-lg ml-10 mt-5">
          Skill Test
        </div>
        
        {/* whole main  */}
        <div className="flex gap-5 w-full pr-3">
          {/* Left  */}
          <div className="w-[60%] ml-5">
              <div className="w-full mt-5 border rounded-lg border-gray-300 py-7 px-3 flex justify-between items-center gap-5">
                  <div className="w-14 h-14 overflow-hidden">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt="html" className="w-full h-full object-cover"/>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-base">
                      Hyper Text Markup Language
                    </div>
                    <div className="font-medium text-gray-600 text-base">
                      Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                    </div>
                  </div>
                  <div>
                  <button type="button" class="text-white bg-blue-900 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700" onClick={openModal}>Update</button>
                  </div>
              </div>


               {/* Modal */}
               {isModalOpen && (
                        <div
                          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                          onClick={closeModal}
                        >
                          <div
                            className="bg-white relative rounded-lg p-8 w-[40%] z-60"
                            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
                          >
                          {/* ROW 1 */}
                          <div className="flex items-center justify-between">
                              <div className="text-2xl font-bold ">
                                Update scores
                              </div>
                              <div className="w-10 h-10 overflow-hidden">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt="html" className="w-full h-full object-cover"/>
                              </div>
                          </div>

                            {/* ROW 2 */}
                            <div className="flex items-center justify-between mt-8">
                <div className="flex items-center gap-5">
                  <TbCircleNumber1Filled size={30} fill="darkblue" />
                  <div className="font-medium text-base text-gray-600">Update your <span className="font-bold text-base">Rank</span></div>
                </div>
                <div className="max-w-sm space-y-3">
                  <input
                    type="text"
                    placeholder="Rank"
                    className={`py-3 px-4 w-36 border-2 rounded-lg text-sm ${errors.rank ? 'border-red-600' : 'border-blue-600'}`}
                    value={modalRank}
                    onChange={(e) => setModalRank(e.target.value)}
                  />
                  {errors.rank && <div className="text-red-600 text-xs">{errors.rank}</div>}
                </div>
                            </div>

                            {/* ROW 3 */}
                            <div className="flex items-center justify-between mt-8">
                <div className="flex items-center gap-5">
                  <TbCircleNumber2Filled size={30} fill="darkblue" />
                  <div className="font-medium text-base text-gray-600">Update your <span className="font-bold text-base">Percentile</span></div>
                </div>
                <div className="max-w-sm space-y-3">
                  <input
                    placeholder="Percentile"
                    type="text"
                    className={`py-3 px-4 block w-36 border-2 rounded-lg text-sm ${errors.percentile ? 'border-red-600' : 'border-blue-600'}`}
                    value={modalPercentile}
                    onChange={(e) => setModalPercentile(e.target.value)}
                  />
                  {errors.percentile && <div className="text-red-600 text-xs ">{errors.percentile}</div>}
                </div>
                            </div>

                          {/* Row 4 */}
                          <div className="flex items-center justify-between mt-8 pb-10">
                <div className="flex items-center gap-5">
                  <TbCircleNumber3Filled size={30} fill="darkblue" />
                  <div className="font-medium text-base text-gray-600">Update your <span className="font-bold text-base">Current Score (out of 15)</span></div>
                </div>
                <div className="max-w-sm space-y-3">
                  <input
                    placeholder="Current Score"
                    type="text"
                    className={`py-3 px-4 block w-36 border-2 rounded-lg text-sm ${errors.currentScore ? 'border-red-600' : 'border-blue-600'}`}
                    value={modalCurrentScore}
                    onChange={(e) => setModalCurrentScore(e.target.value)}
                  />
                  {errors.currentScore && <div className="text-red-600 text-xs">{errors.currentScore}</div>}
                </div>
                           </div>
                           
                          <button type="button" class="text-white flex items-center gap-2 border-2 border-blue-900 absolute right-6 bottom-0 bg-blue-900 hover:bg-blue-700 font-medium rounded-lg hover:border-blue-600 text-sm px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700" onClick={handleSave}>save
                            <MoveRight size={15}/>
                          </button>

                          <button type="button" class="text-blue-900 absolute right-40 border-2 border-gray-400 bottom-0 font-medium rounded-lg text-sm px-8 py-2.5 me-2 mb-2"onClick={closeModal}>cancel
                          </button>
                          </div>
                        </div>
                 )}



              <div className="w-full mt-5 border rounded-lg border-gray-300 pt-3 pb-3  px-3">
                  <div className="font-bold text-lg pl-2">
                    Quick Statistics
                  </div>
                  <div className=" grid grid-cols-3 divide-x pr-2 divide-y-0 divide-gray-300" style={{height:"100px"}}>
                    <div className="flex items-center gap-5 justify-center pr-5">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                          <img src="https://static-00.iconduck.com/assets.00/trophy-winner-prize-icon-2013x2048-rfqmn1p2.png" alt="" className="w-8 h-8 ml-4 mt-4" />
                        </div>
                        <div>
                            <div className="font-bold text-xl">{rank}</div>
                            <div className="font-medium text-sm text-gray-500">YOUR RANK</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 justify-center pr-5">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnpRQ6a9fJCQk-BwCeAAtKTMgnnIfKTcLMRmDJBkQJ9DSqqb0H38QR_Ha3MAve5YS5dSc&usqp=CAU" alt="" className="w-8 h-8 ml-4 mt-4" />
                        </div>
                        <div>
                            <div className="font-bold text-xl">{percentile}%</div>
                            <div className="font-medium text-sm text-gray-500">PERCENTILE</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 justify-end ">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5FcLDqqo6dhYCBG6OSXiXB0zg3ixAVgoKPivKNp27ukQiZEpplWZrU_4_JHwYtAxZZg&usqp=CAU" alt="" className="w-8 h-8 ml-4 mt-4" />
                        </div>
                        <div>
                            <div className="font-bold text-xl">{currentScore}/15</div>
                            <div className="font-medium text-sm text-gray-500">CORRECT ANSWER</div>
                        </div>
                    </div>
                  </div>
              </div>

              <div className="w-full mt-5 border rounded-lg border-gray-300 pt-3 pb-3  px-5">
                  <div className="font-bold text-lg ">
                    Comparison Graph
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm w-2/3 font-medium">
                    <span className="font-bold text-base text-gray-600">You scored 30% percentile</span> which is lower than the average percentile 72% of all the engineers who took this assessment
                    </div>
                        <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100">
                          <img src="https://as2.ftcdn.net/v2/jpg/02/57/37/63/1000_F_257376324_Cu1XTsB34ih5epr9c7XK0XizDf0zL7dN.jpg" alt="" className="w-10 h-10 ml-2 mt-2" />
                        </div>
                  </div>

                  <LineChart percentile={percentile} />
              </div>
          </div>
            
            {/* Right  */}
            <div className="w-[40%] ml-5 pb-20">
                <div className="w-full mt-5 border rounded-lg border-gray-300 pt-5  pb-8  px-5">
                    <div className="font-bold text-lg ">
                      Syllabus Wise Analysis
                    </div>

                    <div className="space-y-3 mt-5">
                         <div className="font-medium text-gray-600 text-base">
                          HTML Tools, Forms, History
                         </div>
                        <div className="flex items-center justify-between">
                            <div className="w-[80%] h-3 rounded-full bg-blue-200">
                              <div className="w-60 h-3 rounded-full bg-blue-500"></div>
                            </div>
                            <div className="font-bold text-base text-blue-500">
                              80%
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3 mt-10">
                         <div className="font-medium text-gray-600 text-base">
                          Tags & References in HTML
                         </div>
                         <div className="flex items-center justify-between">
                            <div className="w-[80%] h-3 rounded-full bg-orange-200">
                              <div className="w-48 h-3 rounded-full bg-orange-500"></div>
                            </div>
                            <div className="font-bold text-base text-orange-500">
                              60%
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3 mt-10">
                         <div className="font-medium text-gray-600 text-base">
                         Table & References in HTML
                         </div>
                         <div className="flex items-center justify-between">
                            <div className="w-[80%] h-3 rounded-full bg-red-200">
                              <div className="w-20 h-3 rounded-full bg-red-500"></div>
                            </div>
                            <div className="font-bold text-base text-red-500">
                              24%
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3 mt-10">
                         <div className="font-medium text-gray-600 text-base">
                         Table & CSS Basics
                         </div>
                         <div className="flex items-center justify-between">
                            <div className="w-[80%] h-3 rounded-full bg-green-200">
                              <div className="w-80 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="font-bold text-base text-green-500">
                              96%
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-5 border rounded-lg border-gray-300 pt-5 pb-5  px-5">
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-lg ">
                      Question Analysis
                    </div>
                    <div className="font-bold text-base text-blue-600">10/15</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium mt-3">
                    <span className="font-bold text-base text-gray-600">You scored 10 question correct out of 15.</span> However it still needs some improvments
                    </div>
                  </div>
                  <div className="mt-10 pb-10">
                    <PieChart percentile={percentile}/>
                  </div>
                </div>
            </div>
        </div>

      </div>
  )
}
