import React from 'react'
import ContentLoader from "react-content-loader"

export const NgoLoading = () => {
    return (
        <div>
            <ContentLoader
                uniqueKey="ramdom-ngo-key"
                speed={2}
                width={380}
                height={112}
                viewBox="0 0 400 160"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                style={{ width: '100%' }}
            >
                <rect x="0" y="85" rx="3" ry="3" width="100" height="8" />
                <circle cx="45" cy="45" r="35"/>

            </ContentLoader>
        </div>
    )
}
