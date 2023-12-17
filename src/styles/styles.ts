export const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",

    paddingx:"px-[3.13rem]  xl:px-[3.5rem]",
    paddingY:"md:py-[7.94rem] py-[6.36rem]",


    flexCenter: "flex justify-center items-center",
    flexBetween:"flex justify-between items-center",
    flexitems:"flex items-center",
    flexCards:`flex items-center w-full flex-wrap`,
    responsiv_flexBetween:'md:flex items-center justify-between gap-2',

    mobilmenu:'lg:hidden bg-white left-0 w-full durtion-200  fixed shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col justify-between z-50 p-4' ,

    card_grids:'grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center',
    grid_two_cols: 'grid grid-cols-1 lg:grid-cols-2',
    footer_grid:'grid grid-cols-1 items-start md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 w-full',
    center_grid:'grid place-items-center h-screen',
    hover_Link:'relative text-base cursor-pointer w-fit block after:block  after:absolute after:h-[3px] after:bg-[#5057f4] after:hover:w-full after:rounded-sm  after:transition after:duration-300 after:origin-left'

}
export const layout = {
    section: `flex lg:flex-row flex-col`,
    sectionrevers:"flex md:flex-row flex-col-reverse",
    sectionInfo:"md:text-left text-center "
}
export default styles