/*type SpinnerProps = {
    loading: boolean,
    size: string,
    borderColor: string,
    borderTopColor: string,
}*/

export default function LoadingSpinner({ loading, size, borderColor, borderTopColor }) {
    return (
        <div className="spinner-container" style={{display:loading?'flex':'none'}}>
            <div className="animate-spin rounded-full" style={{width:size, height:size, border:`4px ${borderColor} solid`, borderTop:`4px ${borderTopColor} solid`}}>
            </div>
        </div>
    );
}